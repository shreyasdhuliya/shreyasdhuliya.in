
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
export default function LeftRightBtn() {

    return(
    <>
            <div className="img-btn-container--left"> 
                                <div className="img-btn--left">
                                        <NavigateBeforeRoundedIcon style={{color:"white"}} />
                                </div>
                        </div>

                        <div className="img-btn-container--right"> 
                                <div className="img-btn--right">
                                        <NavigateNextRoundedIcon style={{color:"white"}} />
                                </div>
                        </div>

    </>
    )
} 