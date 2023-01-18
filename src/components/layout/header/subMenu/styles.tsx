import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  root: {
    position: 'fixed',
    top: 88,
    left: 0,
    right: 0,
    width: '100%',
    height: '308px',
    background: theme.custom.blueBgColor,
  },
  titleContainer: {
    position: 'relative',
    height: 'inherit',
    padding: `${theme.spacing(11)} ${theme.spacing(17.5)}`,
  },
  subMenuHeading: {
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 40,
  },
  subHeading: {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
  },
  getHelpBtn: {
    width: 176,
    height: 50,
    paddingTop: theme.spacing(3),
    backgroundColor: theme.custom.blackColor,
    color: theme.custom.lightFont,
  },
  subMenuContainer: {
    borderLeft: '1px solid black',
  },
  cardGrid: {},
  cardBorder: {
    border: 'none',
    borderBottom: '1px solid black',
    borderRight: '1px solid black',
  },
  emergencyCard: {
    backgroundColor: 'black',
    color: 'white',
    opacity: '1',
    zIndex: 1,
  },
}))

export default useStyles