exports.basicUsers = function () {

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
    ]
  }, [
    'Squash#0 SQUASH_OF User#0',
    'Squash#1 SQUASH_OF User#1',
    'Squash#2 SQUASH_OF User#2',
    'Squash#3 SQUASH_OF User#3'
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
    title: `Title ${1}`,
    content: `Comment ${1}`
  }
}