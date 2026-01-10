import useUserFriends from "@/hooks/Friends/useUserFriends";

export default function FriendsList(props) {
    
    const { data: friends } = useUserFriends();

    if (!style || style == 'list') {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }

}