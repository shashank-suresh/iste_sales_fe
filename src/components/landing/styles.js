import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    gridItem: {
        height: 'calc(100vh - 104px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none'
    },
    sellerGrid: {
        backgroundColor: '#E56B6F',
        '&:hover': {
            backgroundColor: '#EAAC8B'
        },
    },
    buyerGrid: {
        backgroundColor: '#6D597A',
        '&:hover': {
            backgroundColor: '#355070',
        }
    },
    mainText: {
        fontSize: '48px',
        textAlign: 'center',
        backgroundColor: '#F8EDEB',
        color: 'black',
        padding: '16px'
    },
    typography: {
        fontFamily: [
            'Montserrat',
            'Lato',
            'sans-serif',
        ].join(','),
        fontSize: '60px',
        color: 'white',
        textDecoration: 'none'
    }
}))