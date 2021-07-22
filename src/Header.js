import "./Header.css"
import PersonIcon from "@material-ui/icons/Person"
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img src="https://payload.cargocollective.com/1/7/253665/13319293/prt_193x225_1516142787.gif" alt="" className="header__logo" />

            <IconButton>
                <ForumIcon fontSize="large" className="header__logo" />
            </IconButton>
        </div>

    );
}

export default Header;