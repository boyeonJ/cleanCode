요즘 컴포넌트 설계에 대해 관심이 많아졌다. `설계를 잘 하는 개발자`가 되고 싶다는 생각이 든다. 그 이유는 다음과 같다.

1. 초기 구축 서비스에서 `설계를 잘 하고 싶다`.
2. 설계가 잘 된 프로젝트에 투입 되었을때 `잘 흡수하고 스며들고` 싶다.

내가 하고 싶은 설계는 재사용성을 높여 협업에 도움을 주어서 `개발 속도를 향상`시키고, 추후에 `유지보수 비용도 줄일 수` 있는 설계를 하고 싶다.

## Why
내가 이런 생각을 하게 된 계기는 다음과 같다.

1. 처음 내가 작성한 코드를
2. 추후에 팀원이 비슷하다며 **로직과 디자인을 추가**
3. 다른 팀원도 비슷하다며 **로직과 디자인을 추가**
4. 갑자기 내 코드가 작동하지 않음
5. 내가 작성했지만 현재는 알아볼 수 없는 `복잡한 컴포넌트`가 됨
6. 작성한 팀원에서 가서 물어보고 다시 해석해야 해서 간단한 로직이나 디자인 추가에도 `많은 시간이 듬`

![](https://velog.velcdn.com/images/boyeon_jeong/post/cc05dafb-3a14-443d-b85b-7d14e50935fc/image.png)


이런 경험을 하면서 만약 `설계를 처음부터 잘 했다면 정말 좋았겠다` 라는 생각을 하게 되었고, 설계가 정말 중요하다는 사실을 깨달았다. 

## How

### 설계 기법의 종류(디자인 패턴, 아키텍쳐 등등)
설계 기법은 정말 다양하다. 심지어 유명한 디자인 패턴이나 설계 아키텍쳐도 사용하는 기업이나 개인마다 조금씩 의미를 다르게 두어 사용하거나 프로젝트의 성향에 따라 다르게 사용한다. 

> MVC, MVVM, Container-Presenter, Props Drilling과 FLUX 패턴, Atomic, VAC 패턴
> Headless Component, Compound Component, Custom Hook


정말 다양하지만 이러한 패턴들은`재사용성을 높이`고 `기능과 디자인을 분리`하는 목적을 추구하고 있다는 것이 `공통점`이다. 

따라서 우선 특정 디자인 패턴, 아키텍쳐 패턴을 사용하겠다는 생각보다는 실제 예시에서 어떻게 재사용성을 높이고 디자인과 기능을 분리할지에 대해 먼저 생각해보았다.

### 1. 재사용성을 높이자! 

![](https://velog.velcdn.com/images/boyeon_jeong/post/9d14c2a5-1b57-4852-a863-350d7dff1b50/image.png)

예를 들어 위와 같은 디자인을 받았다고 가정해보자! 가장 먼저 해당 디자인의 `기본 요소(Atoms)`를 생각해보면 Input, Button, Text이다. 이렇게 기본 요소를 분리하고 이들을 `조합`하여 사용한다면 재사용성을 높일 수 있을것이다. 

![](https://velog.velcdn.com/images/boyeon_jeong/post/4bf4fcbd-39e5-49c4-a329-314e4223ca4f/image.png)

따라서 재사용성을 높이기 위해서는 `Atomic Design 패턴`을 선택했다.

### 2. 조합방식에 대해 고민해보자!

#### 공통되는 기능과 디자인
- input의 기본 디자인과 기능

#### 다른 디자인
- 하단 text(validation)
- 오른쪽 button
- input내부에 value옆에 붙은 문자열(원)

#### 다른 기능
- 버튼 클릭 기능
- validation 체크 기능

이처럼 공통되는 기능이 있으면서 조금 다른 디자인과 기능을 가진 컴포넌트들의 재사용성을 높이기 위해서는 `molecules으로 잘 조합`하고 `프로젝트 특징`에 따라 cutom hook이나 compound component를 사용하면 좋을꺼 같다.
![](https://velog.velcdn.com/images/boyeon_jeong/post/096b78a2-6024-415c-93a3-4157c5335f4a/image.png)

### 3. 정리해보자면

```javascript
Atomic으로 나누기();
customHook으로 기능 분리();

if(조합해야 하는 경우의 수가 많음 || 반복적으로 쓰이는 횟수가 애매) {
	compound component로 조합 준비();
}

molecules 만들기();

```
![](https://velog.velcdn.com/images/boyeon_jeong/post/9374828c-5291-437d-8b54-831b37887383/image.png)

## Result
위의 방법으로 설계를 한다면 전에 구현했던 방식보다 더 좋은 프로젝트 유지보수가 될꺼 같다. 

아직 완벽한 설계방식은 아니지만 `내가 추구하는 목적`에 한발짝씩 다가가야 겠다. 
> 추구하는 목적: 재사용이 높으면서 다양한 비즈니스 요구에도 쉽게 적용할 수 있는 구조
