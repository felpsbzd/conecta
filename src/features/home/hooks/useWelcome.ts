import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useAppContext } from "../../../context/AppContext";
import { RootStackParamList } from "../../../navigation/navigation.types";
import { UserType } from "../../../types/user.types";

type WelcomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

export function useWelcome() {
    const { dispatch } = useAppContext();
    const navigation = useNavigation<WelcomeNavigationProp>();

    function handleProfessionalPress(){
        dispatch({type: 'SET_USER_TYPE', payload: UserType.PROFESSIONAL});
        navigation.navigate('ProfessionalRegistration');
    }

    function handleCompanyPress(){
        dispatch ({type: 'SET_USER_TYPE', payload: UserType.COMPANY});
        navigation.navigate('CompanyRegistration');
    }

    return{
        handleProfessionalPress,
        handleCompanyPress,
    };
}