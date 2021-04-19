import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'grey',
        fontSize: '33px',
        padding: '20px',
    },
    image: {
        marginLeft: '15px',
    },
    button: {
        background: '#747d8c',
        color: 'white',
        textDecoration: 'none',
        padding: '20px',
        borderRadius: '10px',
    },
    link: {
        marginTop: '50px',
    },
    link1: {
        marginTop: '50px',
        marginBottom: '50px',
    },
}));