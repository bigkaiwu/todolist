import Vue from 'vue'
import { Button } from 'element-ui'
import { Breadcrumb } from 'element-ui'
import { BreadcrumbItem } from 'element-ui'
import { Divider } from 'element-ui'
import { Row } from 'element-ui'
import { Col } from 'element-ui'
import { Input } from 'element-ui'
import { Table } from 'element-ui'
import { TableColumn } from 'element-ui'
import { DatePicker } from 'element-ui'
import { Alert } from 'element-ui'
import { Message } from 'element-ui'
import { Dialog } from 'element-ui'
import { MessageBox } from 'element-ui'

Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Divider)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(Alert)
Vue.use(Dialog)


// 解决组件Message报错this.$message is not a function
Vue.prototype.$message = Message
// 解决element-ui 引用Message后如直接写Vue.use(Message),页面刷新时会自动弹Message问题
Vue.component(Message.name, Message)

Vue.component(MessageBox.name, MessageBox)