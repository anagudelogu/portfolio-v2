'use strict'

const mainFolders = {
  components: true,
  constants: true,
  contexts: true,
  features: true,
  hooks: true,
  pages: true,
  router: true,
  services: true,
  state: true,
  types: true,
  utils: true,
  firebase: true,
  models: true,
  app: true,
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Disallow direct import of files from other folders',
      recommended: true,
    },
    schema: [],
  },
  create: function (context) {
    return {
      ImportDeclaration: function (node) {
        const importPath = node.source.value
        // Normal check though I think useful
        if (typeof importPath !== 'string') {
          return
        }

        // Only look for relative imports, not like react and stuff like that
        if (!importPath.includes('@/')) {
          return
        }

        const dividedPath = importPath.split('/')
        for (let i = 0; i < dividedPath.length; i++) {
          const subfolder = dividedPath[i]
          if (mainFolders[subfolder] && i !== dividedPath.length - 1) {
            context.report({
              node,
              message:
                'Relative imports from other folders should be from the index file',
              loc: node.loc,
            })
          }
        }
      },
    }
  },
}
