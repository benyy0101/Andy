import {create} from 'zustand';
import { ProfileState,ProfileActions } from '../_models/login.interface';

const defaultProfile: ProfileState = {
    kakao_name: '',
    child_seq: '',
    child_name: '',
    child_picture: '',
}

const testProfile: ProfileState = {
    kakao_name: 'test',
    child_seq: '1',
    child_name: '테스트',
    child_picture: 'https://picsum.photos/400',
}
interface ProfileStore{
    profile: ProfileState;
}
export const useProfile = create<ProfileStore & ProfileActions>((set) => ({
    profile: process.env.LOCAL_DEV === 'true' ? testProfile : defaultProfile,
    setProfileInfo: (profile: ProfileState) => set({profile}),
    removeProfileInfo: () => set({}),
}));

export default useProfile;



