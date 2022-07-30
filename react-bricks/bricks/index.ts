import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Hero from './Hero'
import Footer from './Footer'
import Resume from './Resmue'
const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  HeroUnit,
  Hero,
  Footer,
  Resume // Example custom brick
  // Put here your other bricks...
]

export default bricks
