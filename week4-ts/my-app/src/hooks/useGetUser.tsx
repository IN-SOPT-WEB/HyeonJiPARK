import React, { useEffect, useState } from "react";
import { User } from "../types";
import { getUserAPI } from "../lib/api";

export interface UserStateInfo {
    status: "waiting" | "loading" | "success" | "fail";
    user: User | null;
}

// 검색 input값 받아와서 해당 유저 정보 불러오기
function useGetUser(userNameProps: string) {
    console.log(userNameProps);
    const [userName, setUserName] = useState<string>(userNameProps);
    const [userState, setUserState] = useState<UserStateInfo>({
        status: "waiting",
        user: null,
    });

    useEffect(() => {
        getUser();
        console.log(userNameProps, '2');
    }, [userNameProps]);

    const getUser = async() => {
        setUserState({ ...userState, status: "loading" });
        try {
            const data = await getUserAPI(String(userName));
            setUserState({ status: "success", user: data });
        } catch (error) {
            setUserState({ status: "fail", user: null });
            console.error(error);
        }
    }

    return userState;
};

export default useGetUser
