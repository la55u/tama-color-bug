# Tamagui bug report

## The bug

Styles are different in prod vs dev.

## Reproduction

1. clone the repo
2. run `yarn`
3. run `yarn web` and confirm the text in the first box is white
4. kill the terminal
5. run `yarn web:prod && yarn web:prod:serve` and the first text becomes purple

## Expected behavior

The text should be white in step #5 above.
