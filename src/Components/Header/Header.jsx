import styles from "./Header.module.css";
import logo from "../../Images/long-logo.png";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from "./BasicMenu";


function Header(){
    return(
        <div className={styles.navBar}>

            <img src={logo} alt="Logo" className={styles.mainLogo}/>
            <div className={styles.seachBar}>
                <div className={styles.searchAnywhere}>Anywhere</div>
                <div className={styles.searchAnyweek}>Any Week</div>
                <div className={styles.searchAddGuests}>
                    Add Guests
                    <SearchIcon className={styles.searchIcon}/>
                </div>
                
            </div>
            <div className={styles.profileBar}>
                <div className={styles.home}>Airbnb your Home</div>
                <div className={styles.globe}>
                <LanguageIcon/>
                </div>
                <div className={styles.profile}>
                    <BasicMenu className={styles.basicMenu}/>
                </div>
            </div>

           

        </div>
       
    );
}

export default Header;