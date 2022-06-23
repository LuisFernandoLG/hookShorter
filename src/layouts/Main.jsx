import { HeroText } from '../components/HeroText'
import { TextInput } from '../components/TextInput'
import { Button } from '../components/ui/Button'
import { FlexContainer } from '../components/wrappers/FlexContainer'
import Clip from '../assets/icons/clip.svg?component'
import GitHubIcon from '../assets/icons/github.svg?component'
import HeartIcon from '../assets/icons/heart.svg?component'
import CopyIcon from '../assets/icons/copy.svg?component'
import { Icon } from '../components/Icon'
import { Card } from '../components/ui/Card'
import { FloatContainer } from '../components/wrappers/FloatContainer'
import { useEffect, useState } from 'react'
import { IconBubblesAnimation } from '../components/ui/IconBubblesAnimation'
import { urlRedirect } from '../helpers/urlRedirector'
import { useLinkGenerator } from '../hooks/useLinkGenerator'
import { useClipPath } from '../hooks/useClipPath'
import { api } from '../components/services/api'

const initialBaseLink = 'www.google.com'
const initialShortedLink = ''

export const Main = () => {
  const [baseLink, setBaseLink] = useState(initialBaseLink)
  const [shortedLink, setShortedLink] = useState(initialShortedLink)
  const { generateUrlItem, extractTokenFromUrl } = useLinkGenerator()
  const { copyToClipPath } = useClipPath()

  useEffect(() => {
    const token = extractTokenFromUrl({ url: window.location.href })
    console.log({token})
    if (!token) return
    api()
      .getUrlItem({ token: token })
      .then((data) => {
        console.log({ data })
        urlRedirect({ url: data.longLink })
      })
      .catch((e) => console.log({ e }))
  }, [])

  const handleBaseLinkChange = (e) => {
    setBaseLink(e.target.value)
  }

  const ShorLink = () => {
    const urlItem = generateUrlItem({ baseLink: baseLink })
    console.log({ urlItem })
    setShortedLink(urlItem.shortedLink)
    saveUrlItem({ urlItem })
  }

  const saveUrlItem = ({ urlItem }) => {
    api()
      .addUrl({ urlItem })
      .then((e) => {
        console.log({ e })
      })
      .catch((e) => {
        console.log({ e })
      })
  }

  const copyLinkToClipPath = () => copyToClipPath({ content: shortedLink })

  return (
    <div>
      <HeroText />
      <FlexContainer jc_c ai_c gap='1rem'>
        <Card pd='1rem'>
          <FlexContainer gap='0.5rem'>
            <Icon icon={Clip} size='25px' />
            <TextInput
              handleChange={handleBaseLinkChange}
              type={'url'}
              value={baseLink}
            />
          </FlexContainer>
        </Card>
        <Button primary pd='1rem' onClick={ShorLink}>
          <IconBubblesAnimation icon={HeartIcon} />
          Acortar
        </Button>
      </FlexContainer>

      {shortedLink !== initialShortedLink && (
        <FlexContainer jc_c ai_c mg='2rem 0 0 0' gap='1rem'>
          <Card pd='1rem'>
            <TextInput readOnly value={shortedLink} />
          </Card>
          <Button primary pd='1rem' onClick={copyLinkToClipPath}>
            <Icon icon={CopyIcon} size='20px' />
          </Button>
        </FlexContainer>
      )}

      <FloatContainer right='2rem' bottom='2rem'>
        <a href='https://github.com/LuisFernandoLG/hookShorter' target='_blank'>
          <Icon icon={GitHubIcon} />
        </a>
      </FloatContainer>
    </div>
  )
}
