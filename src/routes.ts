import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from './pages/Home'
import GuideList from './pages/GuideList'
import GuideDetail from './pages/GuideDetail'
import StoryDetail from './pages/StoryDetail'
import Messages from './pages/Messages'
import Profile from './pages/Profile'
import Publish from './pages/Publish'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'guides', Component: GuideList },
      { path: 'guide/:id', Component: GuideDetail },
      { path: 'story/:id', Component: StoryDetail },
      { path: 'messages', Component: Messages },
      { path: 'profile', Component: Profile },
      { path: 'publish', Component: Publish },
    ],
  },
])
