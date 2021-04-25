import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    media: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backgroundBlendMode: 'darken',
        height: 150
    },
    border: {
        border: 'solid',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        width: 300
    },
    overlay: {
        position: 'absolute',
        top: '0px',
        right: '-10px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        // justifyContent: 'flex-start',
        margin: '20px 0 0 0',
    },
    desc: {
        fontSize: '15px',
        wordWrap: 'break-word',
    },
    tags: {
        color: 'black',
        borderRadius: '15px',
        padding: '5px 10px',
        fontSize: '12px',
        border: 'black 1px solid',
        marginLeft: '5px'
    },
    name: {
        fontWeight: 'bold',
        fontSize: '24px'
    }
}))