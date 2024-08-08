import i18n from "../locale"

const t = i18n.global.t

type siteOption = {
  title: string,
  panel: {
    displayPanel: string
  }
  vups: {
    [k in string]: {
      uid: string,
      name: string,
      color: string
    }
  },
  footer: {
    webSiteDeclare: string,
    beianInfo: string
  }
}

const siteConfig: siteOption = {
  title: t('siteConfig.title'),

  panel: {
    displayPanel: t('siteConfig.panel.title'),
  },

  vups: {
    xiaoxi: {
      uid: '5563350',
      name: t('siteConfig.xiaoxi.name'),
      color: '#CD3951',
    },
    xiaotao: {
      uid: '1084222017',
      name: t('siteConfig.xiaotao.name'),
      color: '#DCCAE8',
    },
    xiaorou: {
      uid: '1734978373',
      name: t('siteConfig.xiaorou.name'),
      color: '#89dedb',
    },
    reine: {
      uid: '698029620',
      name: t('siteConfig.reine.name'),
      color: '#a272f4',
    },
    ailurus: {
      uid: '1501380958',
      name: t('siteConfig.ailurus.name'),
      color: '#fdc888',
    }
  },

  footer: {
    webSiteDeclare: t('siteConfig.footer.declare'),
    beianInfo: '',
  }
}

export default siteConfig;
