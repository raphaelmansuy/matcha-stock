import { Command, flags } from '@oclif/command'
import { getSingleStockInfo } from './getStocks'
class MatchaStock extends Command {
  static description = `A simple command to retrieve stock information from Yahoo Finance.\nA simple command to retrieve stock information from Yahoo Finance.\n\n Created with ❤️ by Elitizon (https://www.elitizon.com)`

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // Add Support of of -symbol flag
    // flag with a value (-s, --symbol=VALUE)
    symbol: flags.string({
      char: 's', // Alias for my flag
      description: 'stock symbol to retrieve', // A description of the symbol flag
      required: true, // The flag symbol is required 👉 The command will abort of the flag is not provide
      helpValue: 'MSFT', // An example of flag value (MSFT is the symbol for Microsoft)
    }),
  }

  async run() {
    const { flags } = this.parse(MatchaStock)
    const res = await getSingleStockInfo(flags.symbol)
    // Print the result as tabular
    console.table(res)
  }
}

export = MatchaStock
