import {SiHomeassistant} from 'react-icons/si'
import {MdOutlineGroupAdd} from 'react-icons/md'
import {RxUpdate} from 'react-icons/rx'
import {FaUserCog} from 'react-icons/fa'

export const dataMenu = [
  {
    icon: SiHomeassistant,
    title: 'ALL Information',
    link: '/all-information',
  },
  {
    icon: MdOutlineGroupAdd,
    title: 'Add Mentor',
    link: '/add-mentor',
  },
  {
    icon: RxUpdate,
    title: 'Update Mentor',
    link: '/update-mentor',
  },
  {
    icon: FaUserCog,
    title: 'My Account',
    link: '/my-account',
  }
]
