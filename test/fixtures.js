exports.austinTexas = function () {

  return TestHelper.seed({
    User: [
      user('dan'),
      user('justin'),
      user('gilbert'),
      user('karen')
    ],

    Squash: [
      squash(1),
      squash(2),
      squash(3),
      squash(4)
    ],

    Comment: [
      comment(1),
      comment(2),
      comment(3),
      comment(4)
    ],
    Tag: [
      tag(1),
      tag(2),
      tag(3),
      tag(4)
    ]    
  }, [

    'User#0 AUTHOR_OF Squash#0',
    'User#1 AUTHOR_OF Squash#1',
    'User#2 AUTHOR_OF Squash#2',
    'User#3 AUTHOR_OF Squash#3',

    'Comment#0 CHILD_OF Squash#0',
    'Comment#1 CHILD_OF Squash#1',
    'Comment#2 CHILD_OF Squash#2',
    'Comment#3 CHILD_OF Squash#3',

    'Squash#0 FAVORITED_BY User#0',
    'Squash#0 FAVORITED_BY User#1',
    'Squash#0 FAVORITED_BY User#2',
    'Squash#0 FAVORITED_BY User#3',

    'User#0 FOLLOWS User#1',
    'User#2 FOLLOWS User#1',
    'User#3 FOLLOWS User#1',

    'Squash#0 TAGGED_WITH Tag#0',
    'Squash#1 TAGGED_WITH Tag#1',
    'Squash#2 TAGGED_WITH Tag#2',
    'Squash#3 TAGGED_WITH Tag#3'
  ])
}

function user (name) {
  return {
    name: name,
    username: `user_${name}`,
    email: `${name}@email.com`,
    avatar_url: `${name}.com`,
    github_id: `git_${name}`,
  }
}

function squash (number) {
  return {
    title: `Title ${number}`,
    content: `Bug ${number}`
  }
}

function comment (number) {
  return {
    content: `Comment ${number}`
  }
}

function tag (number) {
  return {
    content: `tag ${number}`
  }
}