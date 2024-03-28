import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const logoImage = require("./assets/adaptive-icon.png");

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button title="alert" onPress={() => Alert.alert("input vaidate")} />
        <Button
          title="alert 2"
          onPress={() => Alert.alert("input vaidate", "DOB INcorrect")}
        />
        <Button
          title="alert 3"
          onPress={() =>
            Alert.alert("input vaidate", "DOB INcorrect", [
              { text: "cancel", onPress: () => console.log("cancel") },
              { text: "Ok", onPress: () => console.log("Ok") },
            ])
          }
        />
        <ActivityIndicator size={"large"} />
        <ActivityIndicator
          size={"large"}
          color={"midnightblue"}
          animating={"false"}
        />
        <StatusBar barStyle={"dark-content"} />
        <Button
          title="Open"
          style={{ padding: "5px" }}
          onPress={() => setIsVisible(true)}
        />
        <Modal
          visible={isVisible}
          onRequestClose={() => setIsVisible(false)}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightble", padding: 60 }}>
            <Text>Modal Content</Text>
            <Button title="Close" onPress={() => setIsVisible(false)} />
          </View>
        </Modal>

        <Pressable onPress={() => console.log("image pressed")}>
          <Image source={logoImage} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("Text pressed")}>
          <Text>
            Such a rarity occurred at a media event organised by a leading
            Indian newspaper in capital New Delhi the other day. The questioner
            was Zhou Yongsheng, political counsellor at the Chinese embassy in
            New Delhi. The respondent happened to be Dr Subrahmanyam Jaishankar,
            India’s External Affairs Minister (EAM), who has been increasingly
            acknowledged as a key international interlocutor, of course
            representing his government and Prime Minister Narendra Modi. The
            question was on how China and India, as ‘important neighbours’,
            could find common interests and be partners instead of being rivals,
            Pat came the reply: ‘I think it’s in our common interest that we
            should not have that many forces on the LAC, it’s in our common
            interest that we should observe agreements that we have. And today,
            it’s not just in common interest. I believe it’s in China’s interest
            as well.’ The EAM did not stop there. He referred to the strong
            troop presence on either side of the LAC for four years now, and had
            this to say: ‘The tension has not served either of us well. So the
            sooner we resolve it, I genuinely believe it’s good for both of us.
            And I’m still very much committed to finding a fair, reasonable
            outcome. But one which is respectful of agreements, which recognises
            the LAC, and doesn’t seek to change the status quo.’ Jaishankar made
            an even more pointed observation on domestic politics and border
            disputes. When asked if the Modi leadership would get more empowered
            to talk on the issue with more seats in the current Lok Sabha
            elections, He was reported to have said: ‘To me, the territory of
            India and the fairness of a boundary solution has nothing to do with
            how many seats. Either it’s a good deal or not a good deal. The
            issue today is not whether you have a political majority or not. It
            is whether you have a fair deal on the table, that is the issue.’
            With this in a succinct way, the minister underscored how the border
            dispute with China was a ‘national concern’ for India, independent
            of whoever ruled and whichever party had whatever majority in
            Parliament. At the event in which envoys of Australia, Bhutan,
            Germany, Indonesia and Nepal, among diplomatic representatives from
            many other countries participated, he disclosed how he has remained
            in touch with his Chinese counterpart, Wang Yi, whom he has known
            for many years, on many of these issues. ‘We have been constantly in
            touch. Even on the morning after the Galwan incident, he was the
            person I spoke to,’ Jaishankar said, reiterating the present
            situation at the LAC was ‘very tense and dangerous’. Assertive
            counter Ironically, China purportedly waved the proverbial olive
            branch or at least an olive leave, if that was it, days after
            raising objections to Prime Minister Modi’s visit to Arunachal
            Pradesh, the whole of which is in India’s possession but which
            Beijing claims as its own. In an assertive retort, Randhir Jaiswal,
            the official spokesperson of the Ministry of External Affairs (MEA)
            dismissed the Chinese objections — and by extension, their claims
            over Arunachal — and said that the state ‘was, is and will’ always
            be an integral part of India. It was an assertive counter as always
            — that in any future border talks, if and when revived, Arunachal
            Pradesh was non-negotiable and should be kept out of the agenda for
            future talks. Otherwise, India does acknowledge the need for
            reviving talks, but beginning with the restoration of normalcy and
            status quo ante at Galwan and elsewhere, where the Chinese military
            violated the ground situation in 2020. As coincidence would have it,
            two days before EAM Jaishankar’s response to the Chinese diplomat in
            Delhi, the US Director-General of Intelligence (DNI), in a report,
            raised concerned over a potential armed conflict between India and
            China, as the two sides are known to have amassed 50,000 troops each
            since the Galwan episode. As is known, China has been relocating
            ‘civilian population’ in the new villages created on the other side
            of the Galwan post and elsewhere, thus adding to the prevailing
            tension. Citing sporadic encounters between their militaries as a
            risk for miscalculation and escalation, the report said, ‘While the
            two sides have not engaged in significant cross-border clashes since
            2020, they are maintaining large troop deployments, and sporadic
            encounters between opposing forces risk miscalculation and
            escalation into armed conflict.’ In this context, the US report also
            pointed to China’s ambitions to establish overseas military bases,
            particularly in Sri Lanka and Pakistan. This move is seen as part of
            China’s broader strategy to project power and safeguard its
            interests beyond its borders. Terrorism, first Incidentally, EAM
            Jaishankar’s two-hour media discussion with the hosts in New Delhi
            had also covered very many issues and ideas, including India’s
            equally adversarial western neighbour, Pakistan. On bilateral
            relations with Islamabad, Jaishankar stressed that ‘terrorism’ has
            to be brought to the table, first. ‘We have never closed our doors
            to talk with Pakistan...The question is, what is it you talk about?
            If they have that many terrorist camps dedicated to training people
            who come over with the sole intention of making your life difficult,
            surely that should be the central part of the conversation… I am not
            going to duck the issue of terrorism for the sake of talking to
            them.’ In a significant observation that is acknowledged the world
            over but seldom publicly spoken out by any Indian official in the
            past, Jaishankar said, ‘Governments talk to governments — and the
            military is also part of the Pakistani government.’ However, unlike
            some of India’s western friends and allies, starting with the US, he
            brushed aside suggestive questions if India would be willing to talk
            to the Pakistani military. ‘It doesn’t work like that,' he said,
            clearly indicating an absence of enthusiasm on India’s part to
            side-step the civilian elected governments in Islamabad, the
            political capital, and open a line of communication with the
            twin-city, Rawalpindi, the military headquarters. Referring to the
            India-Pakistan issues, the US intelligence assessment said while
            calm persists following a cease-fire along the LoC since 2021, any
            provocations from Islamabad could lead to armed conflict between the
            two neighbours. It is evident that India is playing its cards well
            on the twin China-Pakistan front, which has the potential to become
            one large theatre if the other two strategised together in case of
            any eventuality. What matters here is EAM Jaishankar readily
            conceding the reality of the need to ease tensions along the China
            border but without yielding any ground. Nor did he refer one way or
            other to the recent parliamentary elections in Pakistan throwing up
            the impossibility of a coalition government between traditional
            adversaries, namely, the PML(N) and the PPP, against common enemy
            PTI of jailed former cricketer Imran Khan. Clearly, India may not be
            too eager to commence normalisation talks with Pakistan until the
            fate of the current government is known over the medium, if not the
            long term. As precedents would have it, if the government stabilises
            despite the inherent differences and distortions, the military is
            not going to like it. If it does not stabilise, it does not matter
            for India to commence talks — independent of the fate and future of
            the ongoing elections in the country. Yet, by declaring that New
            Delhi does not intend talking to the Pakistani military, Jaishankar
            has drawn the line. It is also the fine-line that no government in
            New Delhi has crossed in a long, long time, indicating that it is
            also a part of the national policy on dealing with the north-western
            neighbour. The writer is a Chennai-based Policy Analyst & Political
            Commentator. The views expressed in his column are personal, and do
            not reflect those of Firstpost.
          </Text>
        </Pressable>
        <Pressable onPress={() => console.log("image pressed")}>
          <Image source={logoImage} style={{ width: 300, height: 300 }} />
        </Pressable>

        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=2048x2048&w=is&k=20&c=8bqTDfVOuZAdHKcgXeKUwF6ykw8DEtmfUBUITTVV5O8=",
          }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontWeight: 800, color: "#000" }}>
          <Text style={{ color: "#ddd" }}>Hello</Text> World
        </Text>
        <View
          style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
        ></View>
        <View
          style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
        ></View>

        <ImageBackground source={logoImage} style={{ flex: 1 }}>
          <Text>Helo</Text>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
