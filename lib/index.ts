import { ArgsInput, Arguments, Parser, Options, DetailedArguments } from './yargs-parser-types.js'
import { camelCase, decamelize, looksLikeNumber } from './string-utils.js'
import { YargsParser } from './yargs-parser.js'

const parser = new YargsParser({
  cwd: () => '',
  env: () => {
    return {}
  },
  format: () => '',
  normalize: () => '',
  resolve: () => '',
  require: () => ''
})
const yargsParser: Parser = function Parser (args: ArgsInput, opts?: Partial<Options>): Arguments {
  const result = parser.parse(args.slice(), opts)
  return result.argv
}
yargsParser.detailed = function (args: ArgsInput, opts?: Partial<Options>): DetailedArguments {
  return parser.parse(args.slice(), opts)
}
yargsParser.camelCase = camelCase
yargsParser.decamelize = decamelize
yargsParser.looksLikeNumber = looksLikeNumber
export default yargsParser
