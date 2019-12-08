import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreenEmployee from './src/screens/employee/HomeScreenEmployee';
import HomeScreenManager from './src/screens/manager/HomeScreenManager';
import AddExpensesScreen from './src/screens/employee/AddExpensesScreen';
import ExpensesScreenEmployee from './src/screens/employee/ExpensesScreenEmployee';
import AddManagerScreen from './src/screens/employee/AddMangerScreen';
import ExpensesForReviewScreen from './src/screens/manager/ExpensesForReviewScreen';
import ApprovalScreen from './src/screens/manager/ApprovalScreen';
import InitialScreen from './src/screens/initial/InitialScreen';
import ExpensesScreenManager from './src/screens/manager/ExpensesScreenManager';
import LoginScreen from './src/screens/initial/LoginScreen';
import SignupScreen from './src/screens/initial/SignupScreen';

const navigator = createStackNavigator({
  HomeEmployee: HomeScreenEmployee,
  HomeManager: HomeScreenManager,
  AddExpenses: AddExpensesScreen,
  ExpensesEmployee: ExpensesScreenEmployee,
  AddManager: AddManagerScreen,
  ReviewExpenses: ExpensesForReviewScreen,
  Approval: ApprovalScreen,
  Initial: InitialScreen,
  ExpenseHistoryManager: ExpensesScreenManager,
  Login: LoginScreen,
  Signup: SignupScreen
}, {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    title: 'Expense Report'
  }
})

export default createAppContainer(navigator)