import { styled, XStack, Paragraph } from '@my/ui'

const Frame = styled(XStack, {
  px: '$3',
  bg: 'gainsboro',
  variants: {
    active: { true: { bg: 'navy', borderColor: 'navy' } },
  } as const,
})

const Label = styled(Paragraph, {
  tag: 'span',
  color: 'rebeccapurple',
  variants: {
    active: { true: { color: 'white' } },
  } as const,
})

export default function Page() {
  return (
    <XStack m={30} gap="$2">
      <Frame active>
        <Label active>Hello</Label>
      </Frame>
      <Frame>
        <Label>Test</Label>
      </Frame>
    </XStack>
  )
}
