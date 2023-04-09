'use strict'

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'layout',
    docs: {
      description: 'Disallow functions inside JSX Elements',
      recommended: true,
    },
    schema: [],
  },
  create: function (context) {
    if (['jsx', 'tsx'].includes(context.getFilename().slice(-3))) {
      return {
        ArrowFunctionExpression: function (node) {
          const { parent } = node
          if (parent.type === 'JSXExpressionContainer') {
            context.report({
              node: parent,
              message: 'Disallow arrow functions inside JSX/TSX Elements',
              loc: parent.loc,
            })
          }
        },
        FunctionExpression: function (node) {
          const { parent } = node
          if (parent.type === 'JSXExpressionContainer') {
            context.report({
              node: parent,
              message: 'Disallow functions inside JSX/TSX Elements',
              loc: parent.loc,
            })
          }
        },
      }
    }

    return {}
  },
}
