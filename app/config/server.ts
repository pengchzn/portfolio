import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { Config, defaultConfig } from './index'

export async function getServerConfig(): Promise<Config> {
  try {
    const configPath = path.join(process.cwd(), 'config.yaml')
    const fileContents = await fs.promises.readFile(configPath, 'utf8')
    const yamlConfig = yaml.load(fileContents) as Config
    return yamlConfig
  } catch (error) {
    console.warn('Could not load config.yaml, using default config:', error)
    return defaultConfig
  }
}
