import {create} from 'zustand';
import { ProfileState } from '../_models/login.interface';

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

export const useProfile = create((set) => ({
    profile: process.env.LOCAL_DEV === 'true' ? testProfile : defaultProfile,
    setProfileInfo: (profile: ProfileState) => set({profile}),
    removeProfileInfo: () => set({profile: defaultProfile}),
}));

export default useProfile;



