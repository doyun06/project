# 회원가입 시나리오
 

# 로그인 시나리오

   
# 무언갈 설정하기


# 게시글 쓰기 시나리오
    1. 게시글 목록(메인 화면)이 보인다.
    2. 글쓰기 버튼을 누른다.
    3. 글쓰기 화면이 보인다.
    4. 게시글의 카테고리를 선택한다.
    5. 게시글의 목적을 "질문"또는 "꿀팁 공유"로 선택한다.
    6. 게시글을 작성한다.
    7. 업로드 버튼을 누른다.

# 게시글 보기 시나리오
    1. 게시글 목록(메인 화면)이 보인다.
    2. 게시글을 선택한다.
    3. 선택된 게시글이 보인다.

# 게시글 삭제 시나리오
    1. 게시글 목록(메인 화면)이 보인다.
    2. 내 정보 버튼을 누른다.
    3. 프로필 화면 탭이 뜬다.
    4. "나의 게시글" 버튼을 누른다.
    5. 사용자가 올린 게시글(나의 게시글)이 보인다.
    6. 삭제할 게시글을 꾸~욱 눌러 선택한다.
    7. 삭제 버튼을 눌러서 선택된 게시글들을 삭제한다.

# 게시글 감정 표현 시나리오（게시글）
    1. 게시글 화면이 보인다.
    2. 꿀 단지 모양 버튼을 누른다.

# 게시글 답글 입력 시나리오（게시글）
    1. 게시글 화면이 보인다.
    2. 게시글 오른쪽에 채팅 모양 버튼을 눌러 댓글 목록(댓글 화면)으로 들어간다.
    3. 아래 텍스트 박스에 댓글을 입력한다.
    4. 텍스트 박스 오른쪽에 있는 작성 버튼을 누른다.

# 액티비티 목록
- 메인 화면 (게시글 목록)
- 글쓰기 화면
- 게시글 화면
- 댓글 화면
- 프로필 화면 (자신)
- 프로필 화면 (타인)
- 게시글 관리 화면 (올린 게시글 목록)

# 이넘 코드 예시
> # __Category__
```java
enum Category {
    Hardware,
    ProgrammingLanguages,
    Illustration,
    Server,
    GraphicDesign,
    Modelling,
    Algorithm,
    Windows,
    Mac,
    Game
}
```
> # __Purpose__
```java
enum Purpose {
    Ask,
    Answer
}
```
> # __Gender__
```java
enum Gender {
    Male,
    Female,
    Unknown
}
```
# 클래스 목록
> # __User__
>> # 생성자
>>> - __id__ (String)
>>> - __name__ (String)
>>> - __age__ (int)
>>> - __gender__ ([Gender](#gender))
>> # 속성
>>> - __id__ (private String)
>>> - __name__ (private String)
>>> - __age__ (private int)
>>> - __gender__ (private [Gender](#gender))
>>> - __level__ (private int)
>>> - __honeyJar__ (private int)
>> # 동작
>>> - ### __createPost__ (void)
>>>> - __title__ (String)
>>>> - __mainText__ (String)
>>>> - __category__ ([Category](#category))
>>>> - __purpose__ ([Purpose](#purpose))
>>> - ### __delete__ (void)
>>> - ### __getName__ (String)
>>> - ### __getAge__ (int)
>>> - ### __getGender__ ([Gender](#gender))
>>> - ### __getLevel__ (int)
>>> - ### __getHoneyCount__ (int)
>>> - ### __setId__ (void)
>>>> - __id__ (String)
>>> - ### __setName__ (void)
>>>> - __name__ (String)
>>> - ### __setAge__ (void)
>>>> - __age__ (int)
>>> - ### __setGender__ (void)
>>>> - __gender__ ([Gender](#gender))
>>>> - __cause__ (String)
>>> - ### __setLevel__ (void)
>>>> - __level__ (int)
>>> - ### __setHoneyCount__ (void)
>>>> - __honeyCount__ (int)
>>> - ### __follow__ (boolean)
>>>> - __target__ ([User](#user))

> # __Post__
>> # 생성자
>>> - __host__ ([User](#user))
>>> - __title__ (String)
>>> - __mainText__ (String)
>>> - __category__ ([Category](#category))
>>> - __purpose__ ([Purpose](#purpose))
>> # 속성
>>> - __host__ (private [User](#user))
>>> - __createdAt__ (private [LocalDate](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/time/LocalDate.html))
>>> - __modified__ (private boolean)
>>> - __title__ (private String)
>>> - __mainText__ (private String)
>>> - __category__ (private [Category](#category))
>>> - __purpose__ (private [Purpose](#purpose))
>> # 동작
>>> - ### __delete__ (void)
>>> - ### __getHost__ (User)
>>> - ### __getCreatedAt__ ([LocalDate](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/time/LocalDate.html))
>>> - ### __getTitle__ (String)
>>> - ### __getMainText__ (String)
>>> - ### __getCategory__ ([Category](#category))
>>> - ### __getPurpose__ ([Purpose](#purpose))
>>> - ### __setTitle__ (void)
>>>> - __title__ (String)
>>> - ### __setMainText__ (void)
>>>> - __mainText__ (String)
>>> - ### __setCategory__ (void)
>>>> - __category__ ([Category](#category))
>>> - ### __setPurpose__ (void)
>>>> - __purpose__ ([Purpose](#purpose))

> # __Comment__
>> # 생성자
>>> - __post__ ([Post](#post))
>>> - __host__ ([User](#user))
>>> - __content__ (String)
>> # 속성
>>> - __post__ (private [Post](#post))
>>> - __host__ (private [User](#user))
>>> - __content__ (private String)
>>> - __createdAt__ (private [LocalDate](https://docs.oracle.com/en/java/javase/19/docs/api/java.base/java/time/LocalDate.html))
>>> - __pinned__ (private boolean)
>>> - __modified__ (private boolean)
>> # 동작
>>> - ### delete (void)
>>> - ### modify (void)
>>>> - __content__ (String)
>>> - ### getPost ([Post](#post))
>>> - ### getHost ([User](#user))
>>> - ### getContent
>>> - ### setPinned (void)
>>>> - __pinned__ (boolean)