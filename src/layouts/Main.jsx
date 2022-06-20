import { HeroText } from '../components/HeroText'
import { TextInput } from '../components/TextInput'
import { Button } from '../components/ui/Button'
import { FlexContainer } from '../components/wrappers/FlexContainer'
import Clip from '../assets/icons/clip.svg?component'
import GitHubIcon from '../assets/icons/github.svg?component'
import { Icon } from '../components/Icon'
import { Card } from '../components/ui/Card'
import { FloatContainer } from '../components/wrappers/FloatContainer'

export const Main = () => {
  return (
    <div>
      <HeroText />
      <FlexContainer jc_c ai_c gap='1rem'>
        <Card pd='1rem'>
          <FlexContainer gap='0.5rem'>
            <Icon icon={Clip} size='30px' />
            <TextInput />
          </FlexContainer>
        </Card>
        <Button primary pd='1rem'>
          Acortar
        </Button>
      </FlexContainer>

      <FloatContainer right="2rem" bottom="2rem">
        <a href='google.com'>
        <Icon icon={GitHubIcon} />
        </a>
      </FloatContainer>
    </div>
  )
}
