function addUser(users : BaseUser[], user : BaseUser | null) {
    if (!user) return users
    const userExists = users.some((u) => u.id === user.id)
    if (userExists) return users
    return [...users, user]
}

export default addUser;