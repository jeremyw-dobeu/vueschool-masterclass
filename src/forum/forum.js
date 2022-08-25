// vueschool forum data
data = {
  categories: [
    {
      id: 'c1',
      name: 'Chats',
      forums: ['f1']
    }
  ],
  forums: [
    {
      id: 'f1',
      name: 'fishing',
      description: 'lets talk fishing',
      categoryId: 'c1',
      threads: ['t1']
    }
  ],
  users: [
    {
      id: 'u1',
      name: 'Alex'
    }
  ],
    threads: [
        {
        id: 't1',
        title: 'What is your favorite food?',
        publishedAt: 1681681861,
        posts: [],
        userId: ''
        }
    ],
  posts: [
    {
      id: 'p1',
      publishedAt: 1681681861,
      userId: '',
      text: 'I like burgers, and you?',
      threadId: 't1'
    }
  ]
}

data.posts.filter(post => post.userId == 'u1')
