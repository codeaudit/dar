import { XMLDocument } from 'substance'

export default class ManifestDocument extends XMLDocument {
  getRootNode() {
    if (!this.root) {
      let nodes = this.getNodes()
      let ids = Object.keys(nodes)
      for (var i = 0; i < ids.length; i++) {
        let node = nodes[ids[i]]
        if (node.type === 'manifest') {
          this.root = node
        }
      }
    }
    return this.root
  }
}
