import { CharacterAggregate } from '~/api/characters'
import { Flex } from '~/components/Flex'
import { LocationComponent } from '~/components/Location'
import { Section } from '~/components/Section'
import { Text } from '~/components/Text'

type Props = CharacterAggregate

export const CharacterComponent = ({ episodes, id, image, location, name, origin, species, status }: Props) => (
  <Flex basis="50%" key={id} justify="center" p={16}>
    <Flex background="gray900" borderRadius={10} direction="row" key={id} pr={16}>
      <Flex basis="300px" grow={0} shrink={0}>
        <img alt={name} height={300} src={image} width={300} />
      </Flex>
      <Flex direction="column" grow={1} pb={16} pl={16} pt={16} shrink={1}>
        <Flex pb={8}>
          <Text colorName="white" ellipsis kind="headingS">
            {name}
          </Text>
        </Flex>
        <Section subtitle={`${status} - ${species}`} title="Status" />
        <Flex pb={8}>
          <Text colorName="gray100" kind="bodyS">
            Location
          </Text>
          {location ? (
            <LocationComponent location={location} />
          ) : (
            <Text colorName="gray050" kind="bodyM">
              Unknown
            </Text>
          )}
        </Flex>
        <Flex pb={8}>
          <Text colorName="gray100" kind="bodyS">
            Origin
          </Text>
          {origin ? (
            <LocationComponent location={origin} />
          ) : (
            <Text colorName="gray050" kind="bodyM">
              Unknown
            </Text>
          )}
        </Flex>
        <Section subtitle={episodes.map(({ name: episodeName }) => episodeName).join(', ')} title="Episodes" />
      </Flex>
    </Flex>
  </Flex>
)
