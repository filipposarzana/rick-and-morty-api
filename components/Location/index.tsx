import { Location } from '~/api/locations'
import { Text } from '~/components/Text'

type Props = {
  location: Location
}

export const LocationComponent = ({ location }: Props) => (
  <Text colorName="white" kind="bodyM">
    <Text colorName="gray100" kind="bodyS">
      Name:
    </Text>{' '}
    {location.name}{' '}
    <Text colorName="gray100" kind="bodyS">
      Dimension:
    </Text>{' '}
    {location.dimension}{' '}
    <Text colorName="gray100" kind="bodyS">
      Type:
    </Text>{' '}
    {location.type}{' '}
    <Text colorName="gray100" kind="bodyS">
      N&deg; Residents:
    </Text>{' '}
    {location.residents.length}
  </Text>
)
