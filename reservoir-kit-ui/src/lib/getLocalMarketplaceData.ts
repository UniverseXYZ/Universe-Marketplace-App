import { getClient } from '@reservoir0x/reservoir-sdk'
import universeJson from '../../../universe.json';


export default () => {
  const client = getClient()
  let reservoirTitleEl = document.querySelector(
    "meta[property='reservoir:title']"
  )
  let title = null
  if (reservoirTitleEl) {
    title = reservoirTitleEl.getAttribute('content')
  }

  if (!title && client && client.source) {
    title = client.source
  } else if (!title) {
    title = location ? location.hostname.replace('www.', '') : ''
  }

  const reservoirIconEl = document.querySelector(
    "meta[property='reservoir:icon']"
  )
  let icon = null
  if (reservoirIconEl) {
    icon = reservoirIconEl.getAttribute('content')
  }

  if (!icon) {
    const favicon = document.querySelector("link[rel*='icon']")
    if (favicon) {
      icon = favicon.getAttribute('href')
    }
  }

  const universeData = JSON.parse(JSON.stringify(universeJson));
  // Override and add Universe Icon
  icon = universeData.marketplaces[0].imageUrl;

  return {
    title,
    icon,
  }
}
