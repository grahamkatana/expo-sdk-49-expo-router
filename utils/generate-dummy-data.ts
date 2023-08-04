import { faker } from '@faker-js/faker'
import { Thread, User } from '@/types/threads'
export function createRandomFollower(): User {
    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        username: faker.internet.userName(),
        verified: Math.random() >= .5,
        bio: faker.person.bio(),
        link: faker.internet.url(),
    }

}
export function createRandomUser(): User {
    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        username: faker.internet.userName(),
        verified: Math.random() >= .5,
        bio: faker.person.bio(),
        link: faker.internet.url(),
        followers: new Array(Math.floor(Math.random() * 15)).fill(null).map((_) => createRandomFollower())
    }

}

export function createRandomThread(): Thread {
    const author = createRandomUser()
    const mentionUser = createRandomUser()
    return {
        id: faker.string.uuid(),
        author,
        content: faker.lorem.paragraph(),
        image: Math.random() > 0.5 ? faker.image.url() : undefined,
        likesCount: Math.floor(Math.random() * 1000),
        repliesCount: Math.floor(Math.random() * 3000),
        createdAt: faker.date.recent().toISOString(),
        mention: Math.random() > 0.5,
        mentionUser,
        replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
            id: faker.string.uuid(),
            auther: createRandomUser(),
            content: faker.lorem.sentence(),
            likes: Math.floor(Math.random() * 1200),
            createdAt: faker.date.recent().toISOString(),

        }))
    }
}

export function generateThreads(): Thread[] {
    return new Array(10).fill(null).map((_) => createRandomThread())
}