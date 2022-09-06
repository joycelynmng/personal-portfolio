import Header from '../components/indexComponents/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
    </Container>
  )
}