import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'blake2b-asic-control',
  title: 'Blake2b ASIC Control',
  license: 'MIT',
  packageRepo: 'https://github.com/christhealien/blake2b-asic-control-startos',
  upstreamRepo: 'https://github.com/christhealien/blake2b-asic-control',
  marketingUrl: 'https://github.com/christhealien/blake2b-asic-control',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    app: {
      source: {
        dockerTag: 'ghcr.io/christhealien/blake2b-asic-control:1.15.8',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
