import { makeStyles } from '@material-ui/core/styles'
import { PlayCircleFilledWhite } from '@material-ui/icons'

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        backgroundColor: '#F8EDEB',
        color: 'black',
        width: '100vw'
    },
    heading: {
        color: 'black',
        textDecoration: 'none',
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    signbutton: {
        color: 'black',
        borderColor: 'black'
    },
    logout: {
        // backgroundColor: '#6A040F'
    }
}))