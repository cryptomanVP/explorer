import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://ping.pub/logo.svg',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Mainnet Explorer',
      href: 'https://mainnet.freedomstake.io',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Testnet Explorer',
      href: 'http://testnet.freedomstake.io',
      icon: 'LifeBuoyIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/cryptomanVP/explorer',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Discord',
    href: 'https://',
    icon: 'EyeIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/freedomstake',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
