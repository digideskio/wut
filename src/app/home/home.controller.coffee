angular.module('wut').controller 'HomeCtrl', ($scope, $timeout, bootstrap)->
  # Every questions left
  @questionsLeft = []
  # Get the description of the quiz
  $scope.bootstrap = bootstrap
  # Set the current question
  setCurrent = =>
    if @questionsLeft.length is 0
      # Randomize every question
      @questionsLeft = _.shuffle bootstrap.questions
    # Pick a question
    $scope.currentQuestion = @questionsLeft.pop()
    $scope.state = 'PROMPT'
  # Submit an answer
  $scope.submit = (index)=>
    @selected = index
    # Is the answer wrong or right?
    $scope.state = if index is $scope.currentQuestion.answer then 'RIGHT' else 'WRONG'
    # Next question in 2000 second
    @timeout = $timeout setCurrent, bootstrap.timeout or 2000
  $scope.choiceClass = (index)=>
    if @selected == index
      if $scope.state is 'RIGHT'
        'btn-success'
      else if $scope.state is 'WRONG'
        'btn-danger'
  # Style of the background element
  $scope.backgroundStyle = => backgroundImage: 'url('+bootstrap.background+')'
  # Set the current question
  do setCurrent
