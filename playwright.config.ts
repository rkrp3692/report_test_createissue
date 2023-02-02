import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
    reporter: [['json', { outputFile: 'results.json' }]]
}

export default config