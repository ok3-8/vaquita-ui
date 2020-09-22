export default {
  documents: {
    'i18n': require('./i18n'),
    // 'custom-theme': require('./custom-theme')
  },
  components: {
    'Basic': {
      'layout': require('./layout'),
      'color': require('./color'),
      'icon': require('./icon'),
      'button': require('./button')
    },
    'Form': {
      
    },
  }
}


type ComponentGroup = "Basic" | "Form" ;

export  {ComponentGroup}
