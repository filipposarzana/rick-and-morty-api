import Head from 'next/head'
import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { getCharacters } from '~/api/characters'
import { CharacterComponent } from '~/components/Character'
import { Flex } from '~/components/Flex'
import { Text } from '~/components/Text'
import { PromiseReturnType } from '~/types'
import { getPageFromCursor } from '~/utils/getPageFromCursor'

const Scroll = styled(Flex)`
  overflow-y: auto;
`

export const getStaticProps = async () => ({
  props: {
    characters: await getCharacters(),
  },
})

type Props = PromiseReturnType<typeof getStaticProps>['props']

const Home = ({ characters: initialCharacters }: Props) => {
  const [next, setNext] = useState(getPageFromCursor(initialCharacters.info.next))
  const [characters, setCharacters] = useState(initialCharacters.results)

  const load = useCallback(async () => {
    try {
      const { info, results } = await getCharacters(next)

      setCharacters([...characters, ...results])

      setNext(getPageFromCursor(info.next))
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
  }, [characters, next, setCharacters, setNext])

  return (
    <>
      <Head>
        <title key="title">Rick and Morty API</title>
        <link key="favicon" rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" grow={1}>
        <Flex background="gray900" p={16}>
          <Flex role="header">
            <a href="./">
              <Text colorName="white" kind="headingL">
                Rick and Morty API
              </Text>
            </a>
          </Flex>
        </Flex>

        <Scroll background="gray050" grow={1} px={16} py={32} shrink={1}>
          <Flex direction="column" role="main">
            <Flex direction="row" wrap="wrap">
              {characters.map((character) => (
                <CharacterComponent key={character.id} {...character} />
              ))}
            </Flex>
            <Flex direction="row" justify="center" p={16}>
              {next ? (
                <a onClick={load}>
                  <Flex background="teal900" borderRadius={4} px={32} py={16}>
                    <Text colorName="white" kind="bodyL">
                      Load
                    </Text>
                  </Flex>
                </a>
              ) : (
                <Text colorName="gray100" kind="bodyM">
                  No more characters
                </Text>
              )}
            </Flex>
          </Flex>
        </Scroll>

        <Flex background="gray900" p={16}>
          <Flex role="footer">
            <Text colorName="white" kind="bodyM">
              &copy; {new Date().getFullYear()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Home
