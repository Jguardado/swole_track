import { connect } from 'react-redux';
import { userName, dailyWorkout, monthlyWorkout, annualWorkout } from "../selectors/root.selector";

import Body from "./body"

const mapStateToProps = (state) => ({
  userName: userName(state),
  dailyWorkout: dailyWorkout(state),
  monthlyWorkout: monthlyWorkout(state),
  annualWorkout: annualWorkout(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps)(Body)
