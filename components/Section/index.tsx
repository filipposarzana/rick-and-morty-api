import { Flex } from '~/components/Flex'
import { Text } from '~/components/Text'

type Props = {
  subtitle: string
  title: string
}

export const Section = ({ subtitle, title }: Props) => (
  <Flex pb={8}>
    <Text colorName="gray100" kind="bodyS">
      {title}
    </Text>
    <Text colorName="white" ellipsis kind="bodyM">
      {subtitle}
    </Text>
  </Flex>
)
