export default function(content) {
  // 使用全局注册的组件暂时无法处理
  if (!content.component || typeof content.component === 'string') {
    return content
  }

  const component = content.component

  const rules = content.rules || (content.rules = [])

  if (component.rules) {
    typeof component.rules === 'function'
      ? rules.push(...component.rules(content))
      : rules.push(...component.rules)
  }

  return {
    ...content,
    rules,
    component
  }
}
