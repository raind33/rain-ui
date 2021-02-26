import Button from '../packages/button'
import ButtonGroup from '../packages/button-group'
import Cascader from '../packages/cascader'
import CascaderItems from '../packages/cascader-items'
import CollapseItem from '../packages/collapse-item'
import Collapse from '../packages/collapse'
import Col from '../packages/col'
import Row from '../packages/row'
import Content from '../packages/content'
import Footer from '../packages/footer'
import Header from '../packages/header'
import Layout from '../packages/layout'
import Sider from '../packages/sider'
import Nav from '../packages/nav'
import NavItem from '../packages/nav-item'
import SubNav from '../packages/sub-nav'
import SlidesItem from '../packages/slides-item'
import Slides from '../packages/slides'
import Tabs from '../packages/tabs'
import TabsBody from '../packages/tabs-body'
import TabsHead from '../packages/tabs-header'
import TabsItem from '../packages/tabs-item'
import TabsPane from '../packages/tabs-pane'
import Icon from '../packages/icon'
import Input from '../packages/input'
import Pager from '../packages/pager'
import Popover from '../packages/popover'
import Sticky from '../packages/sticky'
import Table from '../packages/table'
import Toast from '../packages/toast'
import Uploader from '../packages/uploader'

const components = [
  Button,
  ButtonGroup,
  Cascader,
  CascaderItems,
  CollapseItem,
  Collapse,
  Col,
  Row,
  Content,
  Footer,
  Header,
  Layout,
  Sider,
  Nav,
  NavItem,
  SubNav,
  SlidesItem,
  Slides,
  Tabs,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Icon,
  Input,
  Pager,
  Popover,
  Sticky,
  Table,
  Toast,
  Uploader
]
const install = (Vue) => {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  ButtonGroup,
  Cascader,
  CascaderItems,
  CollapseItem,
  Collapse,
  Col,
  Row,
  Content,
  Footer,
  Header,
  Layout,
  Sider,
  Nav,
  NavItem,
  SubNav,
  SlidesItem,
  Slides,
  Tabs,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Icon,
  Input,
  Pager,
  Popover,
  Sticky,
  Table,
  Toast,
  Uploader
}
