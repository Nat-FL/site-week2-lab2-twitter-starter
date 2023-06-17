import AvatarIcon from "../AvatarIcon/AvatarIcon"
import "./Navbar.css"

//destructured {navInfo} (prop/argument) so easier to work w/understand
//navInfo is the prop created earlier in Apps and is passed to NavBar to 
//be used 
export default function Navbar({navInfo}) {
  console.log(navInfo[0].label)
  return (
    <nav>
      <div className="navbar-container">
        {/* creates Navlinks prop called navLinks that takes in properties from
        navInfo */}
        <NavLinks navLinks = {navInfo} />
        <TwitterIcon />
        <SearchBar />
        <TweetButton />
      </div>
    </nav>
  )
}

export function NavLinks({ navLinks }) {

  return <ul className="nav-links">{
     navLinks.map((linkInfo)=> {
      return (
        // returns a new prop called navLink that gets properties of linkInfo(aka-navLinks)
        <NavLink key={linkInfo.label} navLink = {linkInfo} />
      )
      
    })
  }</ul>
}

export function NavLink({ navLink }) {

  console.log(navLink)
  return (
    <li className={navLink.className}>
      <i className={navLink.icon}></i>
      <span>{navLink.label}</span>
    </li>
  )
}

export function TwitterIcon() {
  return (
    <div className="twitter-icon">
      <i className="fab fa-twitter"></i>
    </div>
  )
}

export function SearchBar() {
  return (
    <div className="search-bar">
      <input placeholder="Search Twitter" />
      <i className="fas fa-search"></i>
    </div>
  )
}

export function TweetButton() {
  return (
    <div className="tweet-button">
      <AvatarIcon />

      <button>Tweet</button>
    </div>
  )
}
