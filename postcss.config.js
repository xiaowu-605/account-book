export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 设计稿宽度 375 时，1rem = 37.5px
      propList: ['*', '!border*'], // 转换所有属性的 px 不转换 border 相关属性
      minPixelValue: 1, // 小于 1px 不转
    },
  },
}
